import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {useFeedContent} from '../store/post';
import Feed from './components/Feed';

function FeedScreen() {
  const navigation = useNavigation();
  const {feedContent} = useFeedContent();

  return (
    <SafeAreaView>
      <ScrollView>
        {feedContent.map((feed, index) => (
          <Feed
            key={index}
            feed={feed}
            onPress={() => navigation.navigate('post-detail', {id: feed.id})}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FeedScreen;
