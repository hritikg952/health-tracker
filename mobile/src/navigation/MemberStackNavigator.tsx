import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FamilyHubPage } from "../pages/family-hub/FamilyHubPage";
import { MemberDashboardPage } from "../pages/member-dashboard/MemberDashboardPage";
import { MedicalTimelinePage } from "../pages/medical-timeline/MedicalTimelinePage";
import { AddRecordPage } from "../pages/add-record/AddRecordPage";

export type HubStackParamList = {
  FamilyHub: undefined;
  MemberDashboard: { memberId: string };
  MedicalTimeline: { memberId: string };
  AddRecord: { memberId: string };
};

const Stack = createNativeStackNavigator<HubStackParamList>();

export function HubStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FamilyHub" component={FamilyHubPage} />
      <Stack.Screen name="MemberDashboard" component={MemberDashboardPage} />
      <Stack.Screen name="MedicalTimeline" component={MedicalTimelinePage} />
      <Stack.Screen name="AddRecord" component={AddRecordPage} />
    </Stack.Navigator>
  );
}
