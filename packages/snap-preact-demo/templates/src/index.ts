import { SnapTemplates, SnapTemplatesConfig } from '@athoscommerce/snap-preact';
import deepmerge from 'deepmerge';
import { combineMerge } from '../../snap/src/middleware/functions';
import { templatesConfig } from './config';

let _templatesConfig: SnapTemplatesConfig = templatesConfig;

if (window.mergeSnapConfig) {
	_templatesConfig = deepmerge(templatesConfig as object, window.mergeSnapConfig, { arrayMerge: combineMerge }) as SnapTemplatesConfig;
}

new SnapTemplates(_templatesConfig);
