import { addEventListener } from './helpers';

export { getUniqId } from '#/common';
export { sendCmd, sendMessage, cache2blobUrl } from '#/common';

const { CustomEvent } = global;
const { dispatchEvent } = EventTarget.prototype;

export function bindEvents(srcId, destId, handle, cloneInto) {
  document::addEventListener(srcId, e => handle(e.detail));
  const pageContext = cloneInto && document.defaultView;
  return (cmd, params) => {
    const data = { cmd, data: params };
    const detail = cloneInto ? cloneInto(data, pageContext) : data;
    const e = new CustomEvent(destId, { detail });
    document::dispatchEvent(e);
  };
}
