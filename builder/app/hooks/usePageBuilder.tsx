import { nanoid } from "nanoid";
import { useState } from "react";
import type { Section } from "~/data/sections";
import { sections } from "~/data/sections";
import { hideNotification, showNotification } from "@mantine/notifications";
import { ArrowBack, Check } from "tabler-icons-react";
import { Button, Group, Text } from "@mantine/core";

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

const usePageBuilder = ({
  initialPages,
}: {
  initialPages: PageBuilderPage[];
}) => {
  const [config, setConfig] = useState<PageConfig[]>([
    { id: nanoid(), name: "theme", value: "greenheart" },
  ]);
  const [currentPage, setCurrentPage] = useState<PageBuilderPage | null>(
    initialPages?.length ? initialPages[0] : null
  );
  const [pages, setPages] = useState<PageBuilderPage[]>(initialPages || []);
  const [selectedSection, setSelectedSection] = useState<Section | null>();

  function addPage(name: string) {
    const page = { pageId: nanoid(), name, pageSections: [] };
    setPages((pages) => [...pages, page]);
    return page;
  }

  function updatePage(pageId: string, data: Partial<PageBuilderPage>) {
    setPages((pages) => {
      let pageIndex = pages.findIndex((page) => page.pageId === pageId);
      let page = pages[pageIndex];

      if (page) {
        page = { ...page, ...data };
        // return pages with the page data updated
        return [
          ...pages.slice(0, pageIndex),
          { ...page },
          ...pages.slice(pageIndex + 1),
        ];
      } else {
        return pages;
      }
    });
  }

  function deletePage(pageId: string) {
    const oldPages = pages;
    setCurrentPage(null);
    setSelectedSection(null);
    const newPages = pages.filter((page) => page.pageId !== pageId);
    setPages(newPages);

    showNotification({
      id: "deletePage-" + pageId,
      title: "Page Deleted",
      message: (
        <Group position="apart">
          <Text>Page deleted</Text>
          <Button
            size={"xs"}
            color={"green"}
            variant={"light"}
            onClick={() => {
              hideNotification("deletePage-" + pageId);
              setPages(oldPages);
              setCurrentPage(
                oldPages.find((page) => page.pageId === pageId) || null
              );
            }}
            leftIcon={<ArrowBack></ArrowBack>}
          >
            Undo
          </Button>
        </Group>
      ),
      icon: <Check></Check>,
      color: "green",
    });
  }

  function addPageSection(section: Section) {
    if (!currentPage) return;
    const selectedPage = pages.find(
      (page) => currentPage.pageId === page.pageId
    );
    if (!selectedPage) return;

    updatePage(selectedPage.pageId, {
      pageSections: [
        ...selectedPage.pageSections,
        { ...section, id: nanoid() },
      ],
    });
  }

  function deleteSection(id: string) {
    if (!currentPage) return;
    const selectedPage = pages.find(
      (page) => page.pageId === currentPage.pageId
    );
    setSelectedSection(null);
    if (!selectedPage) return;

    updatePage(selectedPage.pageId, {
      pageSections: selectedPage.pageSections.filter(
        (section) => section.id !== id
      ),
    });

    showNotification({
      id: "deleteSection-" + id,
      title: "Page Section Deleted",
      message: (
        <Group position="apart">
          <Text>Page section deleted</Text>
          <Button
            size={"xs"}
            color={"green"}
            variant={"light"}
            onClick={() => {
              hideNotification("deleteSection-" + id);
              updatePage(selectedPage.pageId, {
                pageSections: selectedPage.pageSections,
              });
            }}
            leftIcon={<ArrowBack></ArrowBack>}
          >
            Undo
          </Button>
        </Group>
      ),
      icon: <Check></Check>,
      color: "green",
    });
  }

  function setSectionContent(id: string, content: string) {
    const selectedPage = pages.find(
      (page) => page.pageId == currentPage?.pageId
    );

    if (!selectedPage) return;

    const sectionIndex = selectedPage.pageSections.findIndex(
      (section) => section.id === id
    );

    const updatedPageSections = [
      ...selectedPage.pageSections.slice(0, sectionIndex),
      { ...selectedPage.pageSections[sectionIndex], content },
      ...selectedPage.pageSections.slice(sectionIndex + 1),
    ];

    updatePage(selectedPage.pageId, { pageSections: updatedPageSections });
  }

  function moveUp(id: string) {
    const selectedPage = pages.find(
      (page) => page.pageId == currentPage?.pageId
    );

    if (!selectedPage) return;

    const newSections = [...selectedPage.pageSections];
    const currentIndex = newSections.findIndex((section) => section.id === id);
    const currentSection = newSections[currentIndex];
    const swappedSection = newSections[currentIndex - 1];

    if (swappedSection) {
      newSections[currentIndex - 1] = currentSection;
      newSections[currentIndex] = swappedSection;
    }
    updatePage(selectedPage.pageId, { pageSections: newSections });
  }

  function moveDown(id: string) {
    const selectedPage = pages.find(
      (page) => page.pageId == currentPage?.pageId
    );
    if (!selectedPage) return;

    const newSections = [...selectedPage.pageSections];
    const currentIndex = newSections.findIndex((section) => section.id === id);
    const currentSection = newSections[currentIndex];
    const swappedSection = newSections[currentIndex + 1];

    if (swappedSection) {
      newSections[currentIndex + 1] = currentSection;
      newSections[currentIndex] = swappedSection;
    }

    updatePage(selectedPage.pageId, { pageSections: newSections });
  }

  function getPageContent() {
    return JSON.stringify(
      sections.map((sections) => JSON.parse(sections.content))
    );
  }

  function addConfig(name: string, value: string) {
    setConfig((config) => [...config, { id: nanoid(), name, value }]);
  }

  function renameConfig(id: string, newName: string, prevConfigName: string) {
    setConfig((configs) => {
      const newConfigs: PageConfig[] = [...configs];
      const index = configs.findIndex((config) => config.id === id);
      const oldConfig = newConfigs[index];

      console.log({ oldConfig });

      if (oldConfig) {
        pages.forEach((page) => {
          page.pageSections.forEach((pageSection) => {
            const newSectionContent = pageSection.content.replaceAll(
              `{{config:${prevConfigName}}}`,
              `{{config:${newName}}}`
            );

            const pageSections = [...page.pageSections];
            pageSections[pageSections.indexOf(pageSection)]["content"] =
              newSectionContent;

            updatePage(page.pageId, { pageSections });
          });
        });
      }

      // update the config

      newConfigs[index].name = newName;

      return newConfigs;
    });
  }

  function setConfigValue(id: string, value: string) {
    setConfig((configs) => {
      const index = configs.findIndex((config) => config.id === id);
      const newConfigs: PageConfig[] = [
        ...configs.slice(0, index),
        { ...configs[index], value },
        ...config.slice(index + 1),
      ];

      return newConfigs;
    });
  }

  function setConfigValueByName(name: string, value: string) {
    setConfig((configs) => {
      const index = configs.findIndex((config) => config.name === name);
      const newConfigs: PageConfig[] = [
        ...configs.slice(0, index),
        { ...configs[index], value },
        ...config.slice(index + 1),
      ];

      return newConfigs;
    });
  }

  return {
    pages,
    getPageContent,
    selectedSection,
    currentPage,
    config,
    actions: {
      addConfig,
      renameConfig,
      setConfigValue,
      setConfigValueByName,
      updatePage,
      setPages,
      setCurrentPage,
      addPage,
      setSelectedSection,
      setSectionContent,
      addPageSection,
      deleteSection,
      moveUp,
      moveDown,
      deletePage,
    },
  };
};

export default usePageBuilder;
