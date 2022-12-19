import { Foo } from '@/types';

class Api {
  /** api fun */
  fun = (args: string): Foo.ClassFoo => {
    return { name: args };
  };
}

export default new Api();
