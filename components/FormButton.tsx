import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface FormButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  className?: string;
  textClassName?: string;
}

const FormButton: React.FC<FormButtonProps> = ({
  title,
  onPress,
  loading = false,
  className = "py-4 rounded-2xl bg-rose-400 mt-6",
  textClassName = "text-center text-white font-semibold text-base",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      className={`${className} ${loading ? "opacity-70" : ""}`}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className={textClassName}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default FormButton;
