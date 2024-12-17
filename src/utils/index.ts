export const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const convertToArenaOptions = (dataArena: any) => {
  return dataArena.map((item: any) => ({
    id: item.id,
    value: item.name,
    subCourts: item.subCourts,
  }));
};

export const convertToCourtOptions = (arena: any) => {
  if (!arena) {
    return;
  }
  return arena.subCourts.map((court: any) => ({
    id: court,
    value: court,
  }));
};
