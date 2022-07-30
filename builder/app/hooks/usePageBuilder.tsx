import { nanoid } from "nanoid";
import { useState } from "react";
import type { Section } from "~/data/sections";
import { sections } from "~/data/sections";

type PageBuilderPage = {
  pageId: string;
  name: string;
  pageSections: Section[];
};

const usePageBuilder = () => {
  const [currentPage, setCurrentPage] = useState<PageBuilderPage>();
  const [pages, setPages] = useState<PageBuilderPage[]>([]);
  const [selectedSection, setSelectedSection] = useState<Section>();

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
    setPages((pages) => ({
      ...pages.filter((page) => page.pageId !== pageId),
    }));
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

    updatePage(currentPage.pageId, {
      pageSections: currentPage.pageSections.filter(
        (section) => section.id !== id
      ),
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

    console.log({ updatedPageSections });

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

  return {
    pages,
    getPageContent,
    selectedSection,
    currentPage,
    actions: {
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
