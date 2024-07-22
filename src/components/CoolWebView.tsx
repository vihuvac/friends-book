import React, {FC} from 'react';
import {requireNativeComponent, StyleSheet} from 'react-native';

type CoolWebViewProps = {
  htmlString: string;
  onComment?: (comment: string) => void;
  onHighlight?: (highlight: string) => void;
};

interface RNCoolWebViewProps extends CoolWebViewProps {
  style: any;
}

const RNCoolWebView = requireNativeComponent<RNCoolWebViewProps>('CoolWebView');

export const CoolWebView: FC<CoolWebViewProps> = ({
  htmlString,
  onComment,
  onHighlight,
}) => {
  const handleOnComment = (event: any) => {
    if (onComment) {
      onComment(event.nativeEvent.comment);
    }
  };

  const handleOnHighlight = (event: any) => {
    if (onHighlight) {
      onHighlight(event.nativeEvent.highlight);
    }
  };

  return (
    <RNCoolWebView
      style={styles.container}
      htmlString={htmlString}
      onComment={handleOnComment}
      onHighlight={handleOnHighlight}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
  },
});
