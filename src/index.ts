import * as core from '@actions/core';
import { log } from './log';

const message = core.getInput('message', { required: true });
const level = core.getInput('level') || 'info';

log(message, level, core);
