export const filteredAlphabets = (value: string) => {
  const onlyAlphabets = value.replace(/[^a-zA-Z]/g, "");
  const result = onlyAlphabets.slice(0, 3);
  return result;
};

export const handleScroll = (
  content: HTMLDivElement | null,
  setScrollLeft: React.Dispatch<React.SetStateAction<number>>
) => {
  if (content) {
    const { scrollLeft, scrollWidth, clientWidth } = content;
    setScrollLeft((scrollLeft / (scrollWidth - clientWidth)) * 100);
  }
};
