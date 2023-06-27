import { View, Text, StyleSheet } from "react-native";
import Meal from "../models/meal";

function MealDetails({duration, complexity, affordability}) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: "center",
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
