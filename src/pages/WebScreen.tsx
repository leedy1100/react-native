import React, { useEffect, useRef, useState } from 'react'; // Add this line
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, BackHandler } from 'react-native';
import WebView from 'react-native-webview';
import { RootStackParamList } from '../App';
import { WebViewNativeEvent } from 'react-native-webview/lib/RNCWebViewNativeComponent';

type Props = StackScreenProps<RootStackParamList, 'WebScreen'>;

const WebScreen = ({ route }: Props) => {
  const [canGoBack, setCanGoBack] = useState(false); // canGoBack 상태 저장
  const webViewRef = useRef<WebView | null>(null);
  const navigation = useNavigation();

  const handleNavigationStateChange = (navState: WebViewNativeEvent) => {
    setCanGoBack(navState.canGoBack);
  };

  useEffect(() => {
    const onBackPress = () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true; // 웹뷰에서 뒤로 가기를 처리했으므로 기본 동작 차단
      } else {
        navigation.goBack(); // 기본 화면으로 돌아가기
        return true;
      }
    };

    // BackHandler에 이벤트 등록
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [canGoBack, navigation]);
  const { url } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        ref={webViewRef}
        source={{ uri: url }}
        onNavigationStateChange={handleNavigationStateChange}
        allowsBackForwardNavigationGestures={true}

      />
    </SafeAreaView>
  );
};

export default WebScreen;
