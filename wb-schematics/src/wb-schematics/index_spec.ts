import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';


const collectionPath = path.join(__dirname, '../collection.json');


describe('wb-schematics', () => {
  it('works', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('wb-schematics', { name:'foo'}, Tree.empty());

    expect(tree.files).toEqual(['/src/app/app.component.html','/src/app/app.component.ts']);
  });
});
