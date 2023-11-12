import type { PluginItem } from '@babel/core';

export default function (): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        const attributes: string[] = state.opts.props || [];

        path.traverse(
          {
            JSXIdentifier: (current) => {
              if (attributes.includes(current.node.name)) {
                current.parentPath.remove();
              }
            },
          },
        );
      },
    },
  };
}
