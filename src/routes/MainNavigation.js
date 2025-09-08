import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import MainActivity from '../screens/Onboarding/MainActivity';
import OnboardingStarter from '../screens/Onboarding/OnBoardingStarter';
import CustomerOnboarding from '../screens/Onboarding/Customer/CustomerOnboarding';
import EarnerOnboarding from '../screens/Onboarding/Earner/EarnerOnboarding';
import CustomerAppOnboardingStarter from '../screens/Onboarding/Customer/CustomerAppOnboardingStarter';
import CustomerAppOnboarding from '../screens/Onboarding/Customer/CustomerAppOnboarding';
import PremiumBilling from '../screens/PremiumBilling';
import EarnerAppOnboarding from '../screens/Onboarding/Earner/EarnerAppOnboarding';
import EarnerAppOnboardingStarter from '../screens/Onboarding/Earner/EarnerAppOnboardingStarter';
import Login from '../screens/Login/Login';
import CookbookHome from '../screens/EarnerViews/Cookbook/CookbookHome';
import NewRecipe from '../screens/EarnerViews/Cookbook/NewRecipe/NewRecipe';
import ContentHome from '../screens/EarnerViews/Content/ContentHome';
import NewContent from '../screens/EarnerViews/Content/NewContent/NewContent';
import ChatHome from '../screens/EarnerViews/Chat/ChatHome';
import Messenger from '../screens/EarnerViews/Chat/Messenger';
import ProfileHome from '../screens/EarnerViews/Profile/ProfileHome';
import ProfileSetting from '../screens/EarnerViews/Profile/ProfileSetting/ProfileSetting';
import ScheduleSettings from '../screens/EarnerViews/Profile/ProfileSetting/ScheduleSettings';
import AboutOwol from '../screens/EarnerViews/Profile/ProfileSetting/AboutOwol';
import PeopleView from '../screens/EarnerViews/Content/NewContent/PeopleView';
import NewCollection from '../screens/EarnerViews/Cookbook/NewRecipe/NewCollection';
import HomeProfile from '../screens/CustomerViews/CustomerHome/HomeProfile/HomeProfile';
import CustomerHome from '../screens/CustomerViews/CustomerHome/CustomerHome';
import DietaryPreferences from '../screens/CustomerViews/CustomerHome/HomeProfile/DietaryPreferences';
import TasteProfileing from '../screens/CustomerViews/CustomerHome/HomeProfile/TasteProfileing';
import { ThemeProvider } from '../routes/ThemeContext'; // Path to ThemeContext
import NewShoppingList from '../screens/CustomerViews/CustomerHome/NewShoppingList/NewShoppingList';
import PreviewScreen from '../screens/EarnerViews/Cookbook/NewRecipe/PreviewScreen';
import CalendarHome from '../screens/EarnerViews/Calendar/CalendarHome';
import ScheduleSetting from '../screens/EarnerViews/Calendar/ScheduleSetting/ScheduleSetting';
import CalendarNotification from '../screens/EarnerViews/Calendar/CalendarNotification/CalendarNotification';
import InventoryShoppingList from '../screens/CustomerViews/CustomerHome/InventoryShoppingList/InventoryShoppingList';
import InventoryPantry from '../screens/CustomerViews/CustomerHome/InventoryPantry/InventoryPantry';
import KitchenSpaceHome from '../screens/CustomerViews/KitchenSpace/KitchenSpaceHome';
import KitchenSpaceInventory from '../screens/CustomerViews/KitchenSpace/KitchenSpaceInventory/KitchenSpaceInventory';
import AiScan from '../screens/CustomerViews/KitchenSpace/AiScan/AiScan';
import AiDesire from '../screens/CustomerViews/KitchenSpace/AiDesire/AiDesire';
import BarcodeScan from '../screens/CustomerViews/KitchenSpace/BarcodeScan/BarcodeScan';
import SearchProduct from '../screens/CustomerViews/KitchenSpace/SearchProduct/SearchProduct';
import KitchenSpaceCookbook from '../screens/CustomerViews/KitchenSpace/KitchenSpaceCookbook';
import KitchenSpaceNewRecipe from '../screens/CustomerViews/KitchenSpace/KitchenSpaceNewRecipe/KitchenSpaceNewRecipe';
import CustomerCalendarHome from '../screens/CustomerViews/CustomerCalendar/CustomerCalendarHome';
import EventsHome from '../screens/CustomerViews/CustomerCalendar/Events/EventsHome';
import EventDetails from '../screens/CustomerViews/CustomerCalendar/Events/EventDetails';
import ConfirmAndPay from '../screens/CustomerViews/CustomerCalendar/Events/ConfirmAndPay';
import MealPlanHome from '../screens/CustomerViews/MealPlans/MealPlanHome';
import MealPlanHomeTwo from '../screens/CustomerViews/MealPlans/MealPlanHomeTwo';
import DiscoverHome from '../screens/CustomerViews/Discover/DiscoverHome';
import BadgeNotification from '../screens/CustomerViews/Discover/BadgeNotification';
import HomeLearningQuizzes from '../screens/CustomerViews/Discover/HomeLearningQuizzes';
import CommunityBlog from '../screens/CustomerViews/Discover/CommunityBlog';
import ChatView from '../screens/CustomerViews/Discover/ChatView';
import DiscoverEventHome from '../screens/CustomerViews/Discover/DiscoverEvent/DiscoverEventHome';
import Signup from '../screens/Signup/Signup';


const Stack = createNativeStackNavigator();

export default function MainNavigation() {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="splash"
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="splash" component={Splash} />
                    <Stack.Screen name="onboarding" component={MainActivity} />
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="signup" component={Signup} />
                    <Stack.Screen name="onboardstarter" component={OnboardingStarter} />
                    <Stack.Screen name="customerOnboarding" component={CustomerOnboarding} />
                    <Stack.Screen name="earnerOnboarding" component={EarnerOnboarding} />
                    <Stack.Screen name="customerapponboardstarter" component={CustomerAppOnboardingStarter} />
                    <Stack.Screen name="customerapponboarding" component={CustomerAppOnboarding} />
                    <Stack.Screen name="premiumbilling" component={PremiumBilling} />
                    <Stack.Screen name="earnerapponboardstarter" component={EarnerAppOnboardingStarter} />
                    <Stack.Screen name="earnerapponboarding" component={EarnerAppOnboarding} />
                    <Stack.Screen name="cookbookhome" component={CookbookHome} />
                    <Stack.Screen name="contenthome" component={ContentHome} />
                    <Stack.Screen name="chathome" component={ChatHome} />
                    <Stack.Screen name="profilehome" component={ProfileHome} />
                    <Stack.Screen name="newrecipe" component={NewRecipe} />
                    <Stack.Screen name="newcollection" component={NewCollection} />
                    <Stack.Screen name="newcontent" component={NewContent} />
                    <Stack.Screen name="peopleview" component={PeopleView} />
                    <Stack.Screen name="messenger" component={Messenger} />
                    <Stack.Screen name="schedulesettings" component={ScheduleSettings} />
                    <Stack.Screen name="profilesetting" component={ProfileSetting} />
                    <Stack.Screen name="aboutowol" component={AboutOwol} />
                    <Stack.Screen name="customerhomeprofile" component={HomeProfile} />
                    <Stack.Screen name="customerhome" component={CustomerHome} />
                    <Stack.Screen name="calendarhome" component={CalendarHome} />
                    <Stack.Screen name="schedulesetting" component={ScheduleSetting} />
                    <Stack.Screen name="calendarnotification" component={CalendarNotification} />
                    <Stack.Screen name="dietarypreferences" component={DietaryPreferences} />
                    <Stack.Screen name="tasteprofile" component={TasteProfileing} />
                    <Stack.Screen name="newshoppinglist" component={NewShoppingList} />
                    <Stack.Screen name="newrecipepreview" component={PreviewScreen} />
                    <Stack.Screen name="customerinventoryShoppinglist" component={InventoryShoppingList} />
                    <Stack.Screen name="customerinventorypantry" component={InventoryPantry} />
                    <Stack.Screen name="kitchenspacehome" component={KitchenSpaceHome} />
                    <Stack.Screen name="kitchenspaceinventory" component={KitchenSpaceInventory} />
                    <Stack.Screen name="aiscan" component={AiScan} />
                    <Stack.Screen name="aidesire" component={AiDesire} />
                    <Stack.Screen name="aibarcode" component={BarcodeScan} />
                    <Stack.Screen name="searchproduct" component={SearchProduct} />
                    <Stack.Screen name="kitchenspacecookbook" component={KitchenSpaceCookbook} />
                    <Stack.Screen name="kitchenspacenewrecipe" component={KitchenSpaceNewRecipe} />
                    <Stack.Screen name="customercalendarhome" component={CustomerCalendarHome} />
                    <Stack.Screen name="calendareventshome" component={EventsHome} />
                    <Stack.Screen name="eventdetails" component={EventDetails} />
                    <Stack.Screen name="confirmandpay" component={ConfirmAndPay} />
                    <Stack.Screen name="mealplanhome" component={MealPlanHome} />
                    <Stack.Screen name="mealplanhometwo" component={MealPlanHomeTwo} />
                    <Stack.Screen name="discoverhome" component={DiscoverHome} />
                    <Stack.Screen name="badgenotification" component={BadgeNotification} />
                    <Stack.Screen name="homelearningquizzes" component={HomeLearningQuizzes} />
                    <Stack.Screen name="communityblog" component={CommunityBlog} />
                    <Stack.Screen name="chatview" component={ChatView} />
                    <Stack.Screen name="discovereventhome" component={DiscoverEventHome} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}