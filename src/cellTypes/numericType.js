import { registerCellType } from './index';
import { getEditor } from '../editors';
import { getRenderer } from '../renderers';
import { getValidator } from '../validators';

import { EDITOR_TYPE } from '../editors/numericEditor';
import { RENDERER_TYPE } from '../renderers/numericRenderer';
import { VALIDATOR_TYPE } from '../validators/numericValidator';

const CELL_TYPE = 'numeric';

registerCellType(CELL_TYPE, {
  editor: getEditor(EDITOR_TYPE),
  renderer: getRenderer(RENDERER_TYPE),
  validator: getValidator(VALIDATOR_TYPE),
  dataType: 'number',
});
