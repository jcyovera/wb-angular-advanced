import { Rule, SchematicContext, Tree, url, apply, template, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function wbSchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    //tree.create('hello.ts','console.log("hello World guys!!!!")');
    //return tree;
    const sourceTemplate = url('./files/');
    const sourceParametrizedTemplates= apply(sourceTemplate,[
      template({
        ..._options,
        ...strings
      })
    ])
    return mergeWith(sourceParametrizedTemplates)(tree,_context);
  };
}
