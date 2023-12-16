import React, {useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IconBack from '../assets/back.png';
import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import Comment from './components/Comment';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useFeedContent} from '../store/post';

type PostDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'post-detail'
>;

function PostDetailScreen({route}: PostDetailScreenProps) {
  const navigation = useNavigation();
  const [isEllipsis, setIsEllipsis] = useState<boolean>(false);
  const [comment, setComment] = useState<string>('');
  const {feedContent, setDownVote, setUpvote, addComment} = useFeedContent();
  const {id} = route.params;

  return (
    <SafeAreaView>
      <ScrollView style={{marginBottom: 48}}>
        <View>
          <View
            style={{
              height: 64,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={IconBack}
                height={18}
                width={18}
                style={{marginLeft: 22}}
              />
            </Pressable>
            <Image
              source={{
                uri: feedContent[id]?.picProfileUri,
              }}
              width={48}
              height={48}
              style={{borderRadius: 24, marginLeft: 24}}
            />
            <View style={{marginLeft: 16}}>
              <Text
                style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
                {feedContent[id]?.name}
              </Text>
              <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                {feedContent[id]?.datePost}
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
                {feedContent[id].contentText}
              </Text>
              {isEllipsis && (
                <Text style={{color: 'blue'}}>
                  {isEllipsis ? 'More' : 'Less'}
                </Text>
              )}
            </View>
            <Image
              source={{
                uri: feedContent[id].picContentUri,
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
                {feedContent[id].comments.length}
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
                {feedContent[id].totalDownVote}
              </Text>
              <Pressable onPress={() => setDownVote(feedContent[id].id)}>
                <Image source={IconDownvoteInactive} height={18} width={18} />
              </Pressable>
              <Text
                style={{
                  width: 24,
                  marginHorizontal: 11,
                  textAlign: 'center',
                }}>
                {feedContent[id].totalUpVote}
              </Text>
              <Pressable onPress={() => setUpvote(feedContent[id].id)}>
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
        {feedContent[id].comments.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 24,
          zIndex: 10,
        }}>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <TextInput
          placeholder="Enter Comment"
          style={{flex: 1}}
          onChange={e => setComment(e.nativeEvent.text)}
          value={comment}
        />
        <Button
          title="Comment"
          onPress={() => {
            addComment(id, feedContent[id].name, comment);
            setComment('');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;
