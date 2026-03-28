export const parseCommand = (text) => {
  const lower = text.toLowerCase();

  // basic NLP style extraction
  if (lower.includes("agar") && lower.includes("to")) {
    const parts = lower.split("to");

    const keywordPart = parts[0];
    const replyPart = parts[1];

    // keyword extract
    let keyword = "";
    if (keywordPart.includes("price")) keyword = "price";
    else if (keywordPart.includes("location")) keyword = "location";
    else if (keywordPart.includes("book")) keyword = "book";

    return {
      keyword,
      reply: replyPart.trim(),
    };
  }

  return null;
};
