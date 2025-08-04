import { TableauViz } from '@tableau/embedding-api-react';

export function Birds() {
  return (
    <div className='tableau'>
    <TableauViz
    src="https://public.tableau.com/views/magdelena_birds_2020_2025/BirdsofMagdalena"
    toolbar="hidden"
    hideTabs
  />
  </div>
  );
}
