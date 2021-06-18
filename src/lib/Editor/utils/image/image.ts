import { Node, nodeInputRule } from '@tiptap/core';
import { dropImagePlugin, UploadFn } from './upload';

/**
 * Matches following attributes in Markdown-typed image: [, alt, src, title]
 *
 * Example:
 * ![Lorem](image.jpg) -> [, "Lorem", "image.jpg"]
 * ![](image.jpg "Ipsum") -> [, "", "image.jpg", "Ipsum"]
 * ![Lorem](image.jpg "Ipsum") -> [, "Lorem", "image.jpg", "Ipsum"]
 */
const IMAGE_INPUT_REGEX = /!\[(.+|:?)\]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/;

export const createImageExtension = (uploadFn: UploadFn) => {
  return Node.create({
    name: 'image',
    inline: true,
    group: 'inline',
    draggable: true,
    addAttributes: () => ({
      src: {},
      alt: { default: null },
      title: { default: null },
    }),
    parseHTML: () => [
      {
        tag: 'img[src]',
        getAttrs: (dom) => {
          if (typeof dom === 'string') return {};
          const element = dom as HTMLImageElement;

          return {
            src: element.getAttribute('src'),
            title: element.getAttribute('title'),
            alt: element.getAttribute('alt'),
          };
        },
      },
    ],
    renderHTML: ({ HTMLAttributes }) => ['img', HTMLAttributes],

    // @ts-ignore
    addCommands() {
      return {
          insertImage: (imgSrc:string) => ({commands, view}) => {
            const node = view.state.schema.nodes.image.create({
              src: imgSrc,
            });

            commands.insertContent({
              type: node.type.name,
              attrs: node.attrs,
            });

            return true;
          }
      };
    },
    addInputRules() {
      return [
        nodeInputRule(IMAGE_INPUT_REGEX, this.type, (match) => {
          const [, alt, src, title] = match;
          return {
            src,
            alt,
            title,
          };
        }),
      ];
    },
    addProseMirrorPlugins() {
      return [dropImagePlugin(uploadFn)];
    },
  });
};