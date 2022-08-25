import { useState } from 'react';

import { Item } from '../../../../../../../../../components/buttonBar';

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  // const { lifeAreas, loading } = useLifeAreas();
  // const { abcs } = useAbcs();
  // const { abcFilter } = useAbcFilter();
  //
  // useEffect(() => {
  //   if (!lifeAreas.length || !abcs.length) {
  //     return;
  //   }
  //
  //   const result = createItems(lifeAreas, abcs, abcFilter?.lifeAreas);
  //
  //   if (JSON.stringify(result) !== JSON.stringify(items)) {
  //     setItems(result);
  //   }
  // }, [lifeAreas, abcFilter, abcs, items]);

  return { items, loading: true };
};

// const createItems = (lifeAreas: LifeArea[], abcs: any[], filterLifeAreas: string[] | undefined | null) =>
//   lifeAreas.map(
//     lifeArea =>
//       ({
//         _id: lifeArea._id,
//         text: lifeArea.text + getAbcsCount(abcs, lifeArea._id),
//         selected: filterLifeAreas && filterLifeAreas.includes(lifeArea._id),
//       } as Item),
//   );
//
// const getAbcsCount = (abcs: Abc[], lifeAreaId: string) => {
//   const result = abcs.filter(
//     abc => abc.lifeAreas.filter(abcLifeArea => abcLifeArea.lifeAreaId === lifeAreaId).length > 0,
//   );
//
//   return result.length > 0 ? ` (${result.length})` : '';
// };
