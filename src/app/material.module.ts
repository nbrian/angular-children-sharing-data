import { NgModule } from '@angular/core';
import * as MaterialModules from '@angular/material';

export function mapMaterialModules() {
  return Object.keys(MaterialModules).filter(m => {
    const asset = MaterialModules[m];
    return typeof asset === 'function' && asset.name.startsWith('Mat')
    && asset.name.includes('Module');
  }).map(m => MaterialModules[m]);
}

const matModules = mapMaterialModules();

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule {}
