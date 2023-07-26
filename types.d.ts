type Meta = {
    id: string,
    title: string,
    date: string,
    author: string,
    tags: string[],
    cardImg: string,
    description: string,
    isPinned: boolean,
    isHidden: boolean
}

type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
}