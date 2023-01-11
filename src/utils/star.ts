import i18n from 'i18next';

export const STAR_TYPES = {
  data: {
    key: 'data',
    label: i18n.t('common.routes.data'),
  },
  experiment: {
    key: 'experiment',
    label: i18n.t('common.routes.experiment'),
  },
  model: {
    key: 'model',
    label: i18n.t('common.routes.model'),
  },
  test: {
    key: 'test',
    label: i18n.t('common.routes.test'),
  },
  publish: {
    key: 'publish',
    label: i18n.t('common.routes.publish'),
  },
  penetrate: {
    key: 'penetrate',
    label: i18n.t('common.routes.percipience'),
  },
};

export const getStars = () => {
  const star = localStorage.getItem('star');
  if (!star) {
    return null;
  }
  const stars = JSON.parse(star);
  if (stars) {
    return stars;
  }
};

export const removeStarItem = (id: string, type: string) => {
  const star = localStorage.getItem('star');
  if (!star) {
    return;
  }
  const stars = JSON.parse(star);
  if (!stars) {
    return null;
  }
  const filters = stars[type].filter((n: any) => {
    return n.id !== id;
  });
  stars[type] = filters;
  localStorage.setItem('star', JSON.stringify(stars));
  return { ...stars };
};

export const addStarItem = (
  item: {
    name: string;
    id: string;
    title: string;
    path: string;
    relation?: {
      [x: string]: any;
    };
  },
  type: string,
) => {
  const starStr = localStorage.getItem('star');
  if (starStr) {
    const star = JSON.parse(starStr);
    const testTaskData = star[type] || [];
    const items = testTaskData.filter((n: any) => {
      return n['id'] !== item.id;
    });
    items.push(item);
    localStorage.setItem(
      'star',
      JSON.stringify({
        test: items,
      }),
    );
  } else {
    localStorage.setItem(
      'star',
      JSON.stringify({
        test: [item],
      }),
    );
  }
};
