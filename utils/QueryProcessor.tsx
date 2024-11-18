export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "15-11661" );
  }

  if (query.toLowerCase() === "what is your name?") {
    return "KevinB";
  }

  const sumMatch = query.toLowerCase().match(/what is (\d+) plus (\d+)\?/);
  if (sumMatch) {
    const num1 = parseInt(sumMatch[1], 10);
    const num2 = parseInt(sumMatch[2], 10);
    return (num1 + num2).toString();
  }
  
  const largestMatch = query.toLowerCase().match(/which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/);
  if (largestMatch) {
    const numbers = largestMatch.slice(1).map(num => parseInt(num, 10));
    const largestNumber = Math.max(...numbers);
    return largestNumber.toString();
  }

  return "";
}
