import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {CommentType} from '../../store/post';

function Comment({comment, name, picProfileUri}: CommentType) {
  const [isEllipsis, setIsEllipsis] = useState<boolean>(false);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          minHeight: 72,
          paddingVertical: 16,
          paddingHorizontal: 24,
        }}>
        <Image
          source={{
            uri: picProfileUri,
          }}
          width={36}
          height={36}
          style={{borderRadius: 24, marginRight: 16}}
        />
        <View style={{width: '90%'}}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 12,
              lineHeight: 14.52,
              color: '#828282',
            }}>
            {name}
          </Text>
          <View>
            <Text
              style={{fontWeight: '400', fontSize: 16, lineHeight: 19.36}}
              numberOfLines={isEllipsis ? 3 : 0}
              onTextLayout={e => {
                if (e.nativeEvent.lines.length > 3) {
                  setIsEllipsis(true);
                }
              }}>
              {comment}
            </Text>
            {isEllipsis && (
              <Text
                style={{color: 'blue'}}
                onPress={() => setIsEllipsis(!isEllipsis)}>
                {isEllipsis ? 'More' : 'Less'}
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
    </View>
  );
}

export default Comment;
