import create from 'zustand';

type CommentType = {
  id: number;
  picProfileUri: string;
  name: string;
  comment: string;
};

type FeedType = {
  id: number;
  picProfileUri: string;
  name: string;
  datePost: string;
  contentText: string;
  picContentUri: string;
  totalDownVote: number;
  totalUpVote: number;
  comments: CommentType[];
};

type FeedContentType = {
  feedContent: FeedType[];
  setUpvote: (id: number) => void;
  setDownVote: (id: number) => void;
  addComment: (id: number, name: string, comment: string) => void;
};

const useFeedContent = create<FeedContentType>((set, get) => ({
  feedContent: [
    {
      id: 0,
      picProfileUri: 'https://picsum.photos/200',
      name: 'John Doe',
      datePost: '2021-08-17T07:57:53.000Z',
      contentText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget tempor dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
      picContentUri: 'https://picsum.photos/200',
      totalDownVote: 0,
      totalUpVote: 0,
      comments: [
        {
          id: 1,
          picProfileUri: 'https://picsum.photos/200',
          name: 'John Doe',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget tempor dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
        },
        {
          id: 2,
          picProfileUri: 'https://picsum.photos/200',
          name: 'John Doe',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget tempor dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
        },
      ],
    },
    {
      id: 1,
      picProfileUri: 'https://picsum.photos/200',
      name: 'John Doe',
      datePost: '2021-08-17T07:57:53.000Z',
      contentText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget tempor dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
      picContentUri: 'https://picsum.photos/200',
      totalDownVote: 0,
      totalUpVote: 0,
      comments: [
        {
          id: 1,
          picProfileUri: 'https://picsum.photos/200',
          name: 'John Doe',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget tempor dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
        },
        {
          id: 2,
          picProfileUri: 'https://picsum.photos/200',
          name: 'John Doe',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget tempor dapibus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
        },
      ],
    },
  ],
  setDownVote: id => {
    set(state => ({
      feedContent: state.feedContent.map(item =>
        item.id === id
          ? {...item, totalDownVote: item.totalDownVote + 1}
          : item,
      ),
    }));
  },
  setUpvote: id => {
    set(state => ({
      feedContent: state.feedContent.map(item =>
        item.id === id ? {...item, totalUpVote: item.totalUpVote + 1} : item,
      ),
    }));
  },
  addComment: (id, name, comment) => {
    set(state => ({
      feedContent: state.feedContent.map(item =>
        item.id === id
          ? {
              ...item,
              comments: [
                ...item.comments,
                {
                  id: item.comments.length + 1,
                  picProfileUri: 'https://picsum.photos/200',
                  name,
                  comment,
                },
              ],
            }
          : item,
      ),
    }));
  },
}));

export {useFeedContent};
export type {FeedType, CommentType};
