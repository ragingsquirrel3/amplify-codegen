import {
  GraphQLOutputType,
  GraphQLInputType,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLType,
  GraphQLCompositeType,
  DocumentNode,
} from 'graphql';
export interface CompilerOptions {
  addTypename?: boolean;
  mergeInFieldsFromFragmentSpreads?: boolean;
  passthroughCustomScalars?: boolean;
  customScalarsPrefix?: string;
  namespace?: string;
  generateOperationIds?: boolean;
  operationIdsPath?: string;
  addS3Wrapper?: boolean;
}
export interface CompilerContext {
  schema: GraphQLSchema;
  typesUsed: GraphQLType[];
  operations: {
    [operationName: string]: Operation;
  };
  fragments: {
    [fragmentName: string]: Fragment;
  };
  options: CompilerOptions;
}
export interface Operation {
  operationId?: string;
  operationName: string;
  operationType: string;
  variables: {
    name: string;
    type: GraphQLType;
  }[];
  filePath: string;
  source: string;
  rootType: GraphQLObjectType;
  selectionSet: SelectionSet;
}
export interface Fragment {
  filePath: string;
  fragmentName: string;
  source: string;
  type: GraphQLCompositeType;
  selectionSet: SelectionSet;
}
export interface SelectionSet {
  possibleTypes: GraphQLObjectType[];
  selections: Selection[];
}
export interface Argument {
  name: string;
  value: any;
  type?: GraphQLInputType;
}
export declare type Selection = Field | TypeCondition | BooleanCondition | FragmentSpread;
export interface Field {
  kind: 'Field';
  responseKey: string;
  name: string;
  alias?: string;
  args?: Argument[];
  type: GraphQLOutputType;
  description?: string;
  isDeprecated?: boolean;
  deprecationReason?: string;
  isConditional?: boolean;
  selectionSet?: SelectionSet;
}
export interface TypeCondition {
  kind: 'TypeCondition';
  type: GraphQLCompositeType;
  selectionSet: SelectionSet;
}
export interface BooleanCondition {
  kind: 'BooleanCondition';
  variableName: string;
  inverted: boolean;
  selectionSet: SelectionSet;
}
export interface FragmentSpread {
  kind: 'FragmentSpread';
  fragmentName: string;
  isConditional?: boolean;
  selectionSet: SelectionSet;
}
export declare function compileToIR(schema: GraphQLSchema, document: DocumentNode, options?: CompilerOptions): CompilerContext;
//# sourceMappingURL=index.d.ts.map