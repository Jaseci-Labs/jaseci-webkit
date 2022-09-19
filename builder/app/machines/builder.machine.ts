import { nanoid } from "nanoid";
import { assign, createMachine } from "xstate";
import { send } from "xstate/lib/actions";
import { Section } from "~/data/sections";

type PageSectionMapping = Record<
  string,
  { childContent?: string; sections: Section[] }
>;

const reset = assign({
  visibleSections: [],
  path: [],
  selectedSection: undefined,
});

export type PageBuilderPage = {
  pageId: string;
  name: string;
  pageSections: Section[];
};

export type PageConfig = {
  id: string;
  name: string;
  value: string;
};

export type BuilderPath = {
  type: "page" | "section";
  id: string;
};

export type BuilderMachineContext = {
  // track the current page along with the current section we'll be using the builder to update
  path: BuilderPath[];
  // hold pages and their associated sections
  pages: PageBuilderPage[];
  config: PageConfig[];
  // section selected for modification in the property inspector
  selectedSectionId?: string;
  selectedSection?: Section;
  // sections displayed on the page builder for the selected page or page sections
  // when the path changes so does the selected sections
  visibleSections: Section[];
  pageSectionMapping: PageSectionMapping;
};

export type BuilderMachineEvents =
  | { type: "SELECT_PAGE"; pageId: string }
  | { type: "ADD_PAGE"; name: string }
  | { type: "UPDATE_PAGE"; pageId: string; data: Partial<PageBuilderPage> }
  | { type: "DELETE_PAGE"; pageId: string }
  | { type: "ADD_PAGE_SECTION"; section: Section }
  | { type: "SET_SECTION_CONTENT"; sectionId: string; content: string }
  | { type: "DELETE_SECTION"; sectionId: string }
  | { type: "MOVE_UP"; sectionId: string }
  | { type: "MOVE_DOWN"; sectionId: string }
  | { type: "SWITCH_PATH"; pathId: string }
  | { type: "ADD_CONFIG"; name: string; value: string }
  | { type: "SET_CONFIG_VALUE"; value: string; configId: string }
  | { type: "EDIT_SECTION"; sectionId: string }
  | { type: "SET_SELECTED_SECTION"; sectionId: string }
  | {
      type: "RENAME_CONFIG";
      configId: string;
      newConfigName: string;
      prevConfigName: string;
    }
  | { type: "RESET" };

export const builderMachine = createMachine(
  {
    predictableActionArguments: true,
    schema: {
      context: {} as BuilderMachineContext,
      events: {} as BuilderMachineEvents,
    },
    // initial machine data
    context: {
      path: [],
      pages: [],
      selectedSectionId: undefined,
      config: [],
      visibleSections: [],
      pageSectionMapping: {},
    },
    initial: "initial",
    states: {
      initial: {
        on: {
          SELECT_PAGE: { actions: ["selectPage"], target: "building" },
        },
      },
      building: {
        on: {
          SELECT_PAGE: {
            actions: [
              "saveVisibleSections",
              "selectPage",
              "calculateVisibleSections",
            ],
          },
          ADD_PAGE: { actions: ["addPage"] },
          UPDATE_PAGE: { actions: ["updatePage"] },
          DELETE_PAGE: { actions: ["deletePage"] },
          ADD_PAGE_SECTION: {
            actions: [
              "addPageSection",
              "saveVisibleSections",
              "generateSectionContent",
              "calculateVisibleSections",
              "saveVisibleSections",
            ],
          },
          DELETE_SECTION: { actions: ["deleteSection", "saveVisibleSections"] },
          ADD_CONFIG: { actions: "addConfig" },
          RENAME_CONFIG: {
            actions: [
              "saveVisibleSections",
              "renameConfig",
              "calculateVisibleSections",
            ],
          },
          SET_CONFIG_VALUE: { actions: "setConfigValue" },
          SET_SECTION_CONTENT: {
            actions: ["setSectionContent", "saveVisibleSections"],
          },
          MOVE_UP: {
            actions: [
              "moveUp",
              "saveVisibleSections",
              "generateSectionContent",
              "calculateVisibleSections",
            ],
          },
          MOVE_DOWN: {
            actions: [
              "moveDown",
              "saveVisibleSections",
              "generateSectionContent",
            ],
          },
          SET_SELECTED_SECTION: { actions: ["setSelectedSection"] },
          EDIT_SECTION: {
            actions: ["editSection", "calculateVisibleSections"],
          },
          SWITCH_PATH: {
            actions: [
              "saveVisibleSections",
              "switchPath",
              "calculateVisibleSections",
            ],
          },
          RESET: {
            actions: ["reset"],
          },
        },
      },
      saving: {},
    },
  },
  {
    actions: {
      //@ts-ignore
      reset,
      selectPage: (context, event) => {
        if (event.type === "SELECT_PAGE") {
          // set the page
          const page = context.pages.find(
            (page) => page.pageId === event.pageId
          );

          context.path = [{ id: event.pageId, type: "page" }];
          context.visibleSections = page?.pageSections || [];
        }
      },
      setSelectedSection: (context, event) => {
        if (event.type === "SET_SELECTED_SECTION") {
          context.selectedSectionId = event.sectionId;

          // get section by section id
          context.selectedSection = context.visibleSections.find(
            (section) => section.id === event.sectionId
          );
        }
      },
      calculateVisibleSections: (context) => {
        const path = context.path;
        // path length is 1 if we are at the root of the page
        if (path.length === 1) {
          const visibleSections =
            context.pages.find((page) => page.pageId === path[0].id)
              ?.pageSections || [];
          context.visibleSections = visibleSections;
          console.log({ visibleSections });
        } else {
          context.visibleSections =
            context.pageSectionMapping[
              context.path[context.path.length - 1].id
            ].sections;
        }
      },
      saveVisibleSections: (context) => {
        // path length is 1 if we are at root of the page
        if (context.path.length === 1) {
          let pageIndex = context.pages.findIndex(
            (page) => page.pageId === context.path[0].id
          );
          let page = context.pages[pageIndex];

          context.pages = [
            ...context.pages.slice(0, pageIndex),
            { ...page, pageSections: context.visibleSections },
            ...context.pages.slice(pageIndex + 1),
          ];
        } else {
          const currentEditedSectionId =
            context.path[context.path.length - 1].id;
          const currentSectionMappingData = {
            ...context.pageSectionMapping[currentEditedSectionId],
          };
          currentSectionMappingData.sections = [...context.visibleSections];
          context.pageSectionMapping[currentEditedSectionId] = {
            ...currentSectionMappingData,
          };
        }
      },
      addPage: (context, event) => {
        if (event.type === "ADD_PAGE") {
          context.pages = [
            ...context.pages,
            { name: event.name, pageId: nanoid(), pageSections: [] },
          ];
        }
      },
      updatePage: (context, event) => {
        if (event.type === "UPDATE_PAGE") {
          let pageIndex = context.pages.findIndex(
            (page) => page.pageId === event.pageId
          );
          let page = context.pages[pageIndex];

          if (page) {
            page = { ...page, ...event.data };
            // return pages with the page data updated
            context.pages = [
              ...context.pages.slice(0, pageIndex),
              { ...page },
              ...context.pages.slice(pageIndex + 1),
            ];
          }
        }
      },
      deletePage: (context, event) => {
        if (event.type === "DELETE_PAGE") {
          context.pages = context.pages.filter(
            (page) => page.pageId !== event.pageId
          );
        }
      },
      addPageSection: (context, event) => {
        if (event.type === "ADD_PAGE_SECTION") {
          context.visibleSections = [...context.visibleSections, event.section];
        }
      },
      deleteSection: (context, event) => {
        if (event.type === "DELETE_SECTION") {
          context.visibleSections = context.visibleSections.filter(
            (section) => section.id !== event.sectionId
          );
        }
      },
      setSectionContent: (context, event) => {
        if (event.type === "SET_SECTION_CONTENT") {
          const sectionIndex = context.visibleSections.findIndex(
            (section) => section.id === event.sectionId
          );

          context.visibleSections = [
            ...context.visibleSections.slice(0, sectionIndex),
            {
              ...context.visibleSections[sectionIndex],
              content: event.content,
            },
            ...context.visibleSections.slice(sectionIndex + 1),
          ];
        }
      },
      // generate the json for sections that contain deeply nested children
      generateSectionContent: (context, _event) => {
        if (context.path.length > 1) {
          const sectionPath = [...context.path];
          sectionPath.reverse();

          sectionPath.forEach((path, index) => {
            const prevPath = sectionPath[index + 1];

            if (prevPath.type === "section") {
              let prevPathSections =
                context.pageSectionMapping[prevPath.id].sections;
              const currentPathComponentIndex = prevPathSections.findIndex(
                (section) => section.id === path.id
              );
              const prevPathComponent = prevPathSections.find(
                (section) => section.id === path.id
              );

              let prevPathContent = JSON.parse(prevPathComponent!.content);

              prevPathContent = {
                ...prevPathContent,
                sections: {
                  ...prevPathContent.sections,
                  children: [
                    // ...prevPathContent.sections.children,
                    ...context.pageSectionMapping[path.id].sections.map(
                      (section) => JSON.parse(section.content)
                    ),
                  ],
                },
              };

              prevPathSections = [
                ...prevPathSections.slice(0, currentPathComponentIndex),
                {
                  ...prevPathComponent!,
                  content: JSON.stringify(prevPathContent),
                },
                ...prevPathSections.slice(currentPathComponentIndex + 1),
              ];

              context.pageSectionMapping[prevPath.id].sections =
                prevPathSections;
            }

            if (prevPath.type === "page") {
              const pageIndex = context.pages.findIndex(
                (page) => page.pageId === prevPath.id
              );

              const page = context.pages[pageIndex];
              const pageSectionIndex = page.pageSections.findIndex(
                (section) => section.id === path.id
              );

              // update the page sections
              page.pageSections[pageSectionIndex] = {
                id: path.id,
                content: JSON.stringify({
                  ...JSON.parse(page.pageSections[pageSectionIndex].content),
                  sections: {
                    children: [
                      ...context.pageSectionMapping[path.id].sections.map(
                        (section) => JSON.parse(section.content)
                      ),
                    ],
                  },
                }),
                category: page.pageSections[pageSectionIndex].category,
              };

              // update the page in the context
              context.pages = [
                ...context.pages.slice(0, pageIndex),
                page,
                ...context.pages.slice(pageIndex + 1),
              ];
            }
          });
        }
      },
      // move the selected section up
      moveUp: (context, event) => {
        if (event.type === "MOVE_UP") {
          const newSections = [...context.visibleSections];

          const currentIndex = newSections.findIndex(
            (section) => section.id === event.sectionId
          );

          const currentSection = newSections[currentIndex];
          const swappedSection = newSections[currentIndex - 1];

          if (swappedSection) {
            newSections[currentIndex - 1] = currentSection;
            newSections[currentIndex] = swappedSection;
          }

          context.visibleSections = newSections;
        }
      },
      // move the selected section down
      moveDown: (context, event) => {
        if (event.type === "MOVE_DOWN") {
          const newSections = [...context.visibleSections];

          const currentIndex = newSections.findIndex(
            (section) => section.id === event.sectionId
          );

          const currentSection = newSections[currentIndex];
          const swappedSection = newSections[currentIndex + 1];

          if (swappedSection) {
            newSections[currentIndex + 1] = currentSection;
            newSections[currentIndex] = swappedSection;
          }

          context.visibleSections = newSections;
        }
      },
      addConfig: (context, event) => {
        if (event.type === "ADD_CONFIG") {
          context.config = [
            ...context.config,
            { id: nanoid(), name: event.name, value: event.value },
          ];
        }
      },
      renameConfig: (context, event) => {
        if (event.type === "RENAME_CONFIG") {
          const newConfigs: PageConfig[] = [...context.config];
          const index = context.config.findIndex(
            (config) => config.id === event.configId
          );
          const oldConfig = newConfigs[index];

          if (oldConfig) {
            // update references
            context.pages.forEach((page) => {
              page.pageSections.forEach((pageSection) => {
                const newSectionContent = pageSection.content.replaceAll(
                  `{{config:${event.prevConfigName}}}`,
                  `{{config:${event.newConfigName}}}`
                );

                const pageSections = [...page.pageSections];
                pageSections[pageSections.indexOf(pageSection)]["content"] =
                  newSectionContent;

                send({
                  type: "UPDATE_PAGE",
                  pageId: page.pageId,
                  pageSections,
                });
              });
            });

            // rename the config
            newConfigs[index].name = event.newConfigName;
          }
        }
      },
      setConfigValue: (context, event) => {
        if (event.type === "SET_CONFIG_VALUE") {
          const index = context.config.findIndex(
            (config) => config.id === event.configId
          );

          context.config = [
            ...context.config.slice(0, index),
            { ...context.config[index], value: event.value },
            ...context.config.slice(index + 1),
          ];
        }
      },
      switchPath: (context, event) => {
        if (event.type === "SWITCH_PATH") {
          const pathIndex = context.path.findIndex(
            (path) => path.id === event.pathId
          );
          context.path = context.path.slice(0, pathIndex + 1);
        }
      },
      editSection: (context, event) => {
        if (event.type === "EDIT_SECTION") {
          context.path = [
            ...context.path,
            { id: event.sectionId, type: "section" },
          ];

          context.pageSectionMapping = {
            ...context.pageSectionMapping,
            [event.sectionId]: context.pageSectionMapping[event.sectionId] || {
              sections: [],
            },
          };
        }
      },
    },
  }
);
