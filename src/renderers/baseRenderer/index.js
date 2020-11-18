import { registerRenderer } from '../index';
import baseRenderer from './baseRenderer';

export const RENDERER_TYPE = 'base';

registerRenderer(RENDERER_TYPE, baseRenderer);

export default baseRenderer;
