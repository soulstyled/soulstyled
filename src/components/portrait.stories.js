import React from 'react';
import { action } from '@storybook/addon-actions';

import Portrait from './portrait';

export default {
  component: Portrait,
  title: 'Portrait',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => <Portrait />;
