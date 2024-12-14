import {ActivityIndicator, Modal, View} from 'react-native';
import {styles} from './styles';

interface LoadingProps {
  visible: boolean;
}

const Loading = ({visible}: LoadingProps) => {
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    </Modal>
  );
};

export default Loading;
