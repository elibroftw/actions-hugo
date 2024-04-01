import * as core from '@actions/core';
import * as main from './main';

(async (): Promise<void> => {
  try {
    await main.run();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    core.setFailed(`Action failed with error ${e.message}`);
  }
})();
