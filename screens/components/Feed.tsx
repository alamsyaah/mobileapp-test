import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import IconBlock from '../../assets/block.png';
import IconComment from '../../assets/comment.png';
import IconDownvoteInactive from '../../assets/downvote_inactive.png';
import IconShare from '../../assets/share.png';
import IconUpvoteInactive from '../../assets/upvote_inactive.png';
import {FeedType, useFeedContent} from '../../store/post';

type Feed = {
  feed: FeedType;
  onPress: () => void;
};

function Feed({feed, onPress}: Feed) {
  const [isEllipsis, setIsEllipsis] = useState<boolean>(false);
  const {setDownVote, setUpvote} = useFeedContent();
  return (
    <Pressable onPress={onPress}>
      <View style={{height: 547}}>
        <View
          style={{
            height: 64,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={{
              uri: feed.picProfileUri,
            }}
            width={48}
            height={48}
            style={{borderRadius: 24, marginLeft: 24}}
          />
          <View style={{marginLeft: 16}}>
            <Text style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
              {feed.name}
            </Text>
            <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
              {feed.datePost}
            </Text>
          </View>
        </View>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <View>
          <View style={{margin: 24}}>
            <Text
              numberOfLines={isEllipsis ? 3 : 0}
              onTextLayout={e => {
                if (e.nativeEvent.lines.length > 3) {
                  setIsEllipsis(true);
                }
              }}>
              {feed.contentText}
            </Text>
            {isEllipsis && (
              <Text
                style={{color: 'blue'}}
                onPress={() => setIsEllipsis(!isEllipsis)}>
                {isEllipsis ? 'More' : 'Less'}
              </Text>
            )}
          </View>
          <Image
            source={{
              uri: feed.picContentUri,
            }}
            height={200}
          />
        </View>
        <View
          style={{
            height: 52,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}>
            <Image
              source={IconShare}
              height={18}
              width={18}
              style={{marginLeft: 22}}
            />
            <Image
              source={IconComment}
              height={18}
              width={18}
              style={{marginLeft: 24}}
            />
            <Text
              style={{
                width: 24,
                marginHorizontal: 4,
                textAlign: 'center',
              }}>
              {feed.comments.length}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={IconBlock}
              height={18}
              width={18}
              style={{marginLeft: 22}}
            />
            <Text
              style={{
                width: 24,
                marginLeft: 24,
                marginRight: 11,
                textAlign: 'center',
              }}>
              {feed.totalDownVote}
            </Text>
            <Pressable onPress={() => setDownVote(feed.id)}>
              <Image source={IconDownvoteInactive} height={18} width={18} />
            </Pressable>
            <Text
              style={{
                width: 24,
                marginHorizontal: 11,
                textAlign: 'center',
              }}>
              {feed.totalUpVote}
            </Text>
            <Pressable onPress={() => setUpvote(feed.id)}>
              <Image
                source={IconUpvoteInactive}
                height={18}
                width={18}
                style={{marginRight: 22}}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
    </Pressable>
  );
}

export default Feed;
