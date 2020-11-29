type TypeTreeList = Array<{
  path: string;
  name: string;
  children: TypeTreeList;
}>;

type TypeFiles = Array<{
  path: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}>;

type TypeContent = Array<{
  path: string;
  content: string;
}>;

export type TreeList = TypeTreeList;
export type Files = TypeFiles;
export type Content = TypeContent;
