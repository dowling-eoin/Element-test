type TreeListType = Array<{
  path: string;
  name: string;
  children: TreeListType;
}>;

type FilesType = Array<{
  path: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}>;

type ContentType = Array<{
  path: string;
  content: string;
}>;

export type TreeList = TreeListType;
export type Files = FilesType;
export type Content = ContentType;
