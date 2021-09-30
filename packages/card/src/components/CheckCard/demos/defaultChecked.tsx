/** Uuid: 47390657 title: 默认选中 */

import React from 'react';
import { CheckCard } from '@ant-design/pro-card';

export default () => (
  <CheckCard
    avatar="https://gw-office.alipayobjects.com/basement_prod/f31dc3f7-cdc0-42ac-a075-f173fe5d5043.svg"
    title="示例二"
    defaultChecked
    onChange={(checked) => {
      console.log('checked', checked);
    }}
  />
);