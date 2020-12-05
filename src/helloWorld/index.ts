import { countToN } from './ChatLogger';
import autoWrap = consumer.autoWrap;
import TextHelper = Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
import BaseEvent = Events.BaseEvent;

type EventRecvMessage = BaseEvent & { text: TextHelper }

jsmacros.on('EventRecvMessage' as const, autoWrap((e: EventRecvMessage) => {
  try {
    const msg = e.text.toString();
    const match = msg.toString().match(/count\((.+)\)/);
    if (match) {
      countToN(Number(match[1]))
    }
  } catch(e) {
    chat.log(`§4ERROR: §c${e.message}`)
  }
}))