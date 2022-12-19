import { ReactNode } from 'react';

namespace Fa {
  // ------------------------------------- Constant -------------------------------------
  export type KeyType = string | number;

  export const Constant = {
    /** 约定：tree结构数据，根结点的ID默认为0 */
    TREE_SUPER_ROOT_ID: 0,
    TREE_SUPER_ROOT_LABEL: '根节点',
  };

  // ------------------------------------- ENTITY -------------------------------------
  export interface BaseCrtEntity {
    /** 创建时间 */
    crtTime?: string;
    /** 创建人ID */
    crtUser?: string;
    /** 创建人 */
    crtName?: string;
    /** 创建IP */
    crtHost?: string;
  }

  export interface Option {
    value: string;
    label: string;
  }
}

export default Fa;
