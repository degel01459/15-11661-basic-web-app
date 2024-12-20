function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

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

  const multiplyMatch = query.toLowerCase().match(/what is (\d+) multiplied by (\d+)\?/);
  if (multiplyMatch) {
    const num1 = parseInt(multiplyMatch[1], 10);
    const num2 = parseInt(multiplyMatch[2], 10);
    return (num1 * num2).toString();
  }
  const squareCubeMatch = query.toLowerCase().match(/which of the following numbers is both a square and a cube: (.+)\?/);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].split(",").map(num => parseInt(num.trim(), 10));
    for (const number of numbers) {
      const root = Math.round(Math.pow(number, 1 / 6));
      if (Math.pow(root, 6) === number) {
        return number.toString();
      }
    }
    return "No such number found";
  }
  const primeMatch = query.toLowerCase().match(/which of the following numbers are primes: (.+)\?/);
  if (primeMatch) {
    const numbers = primeMatch[1].split(",").map(num => parseInt(num.trim(), 10));
    const primes = numbers.filter(isPrime);
    return primes.join(", ");
  }
  const subtractMatch = query.toLowerCase().match(/what is (\d+) minus (\d+)\?/);
  if (subtractMatch) {
    const num1 = parseInt(subtractMatch[1], 10);
    const num2 = parseInt(subtractMatch[2], 10);
    return (num1 - num2).toString();
  }
  return "";
}
