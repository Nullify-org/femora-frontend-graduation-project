export function sortByOrderIndex<T extends { orderIndex: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.orderIndex - b.orderIndex);
}