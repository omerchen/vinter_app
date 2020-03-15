import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import FirstScreen from "../screens/FirstScreen";
import CreateFixtureScreen from "../screens/CreateFixtureScreen";
import PreviousFixturesScreen from "../screens/PreviousFixturesScreen";
import FixtureStatisticsScreen from "../screens/FixtureStatisticsScreen";
import MatchesScreen from "../screens/MatchesScreen";
import ViewFixtureScreen from "../screens/ViewFixtureScreen";
import AllPlayersScreen from "../screens/AllPlayersScreen"
import RequirePasswordScreen from "../screens/RequirePasswordScreen"
import MatchScreen from "../screens/MatchScreen"
import PreviousMatchesScreen from "../screens/PreviousMatchesScreen"
import CreateEventScreen from "../screens/CreateEventScreen"
import ManageFixtureScreen from "../screens/ManageFixtureScreen"
import RulesScreen from "../screens/RulesScreen"
import CreateMatchScreen from "../screens/CreateMatchScreen"
import PlayerScreen from "../screens/PlayerScreen"
import LeagueTableScreen from "../screens/LeagueTableScreen"
import AddPlayerScreen from "../screens/AddPlayerScreen"
import EditPlayerScreen from "../screens/EditPlayerScreen"

import Colors from "../constants/colors";
import EditFixtureScreen from "../screens/EditFixtureScreen";

const MainNavigator = createStackNavigator(
  {
    First: {
      screen: FirstScreen,
    },
    Match: {
      screen: MatchScreen,
    },
    CreateEvent: {
      screen: CreateEventScreen,
    },
    CreateFixture: {
      screen: CreateFixtureScreen,
      navigationOptions: {
        headerTitle: "מחזור חדש"
      }
    },
    EditFixture: {
      screen: EditFixtureScreen,
    },
    PreviousFixtures: {
      screen: PreviousFixturesScreen,
      navigationOptions: {
        headerTitle: "מחזורים קודמים"
      }
    },
    PreviousMatches: {
      screen: PreviousMatchesScreen,
      navigationOptions: {
        headerTitle: "משחקי המחזור"
      }
    },
    Rules: {
      screen: RulesScreen,
      navigationOptions: {
        headerTitle: "שיטת הניקוד"
      }
    },
    LeagueTable: {
      screen: LeagueTableScreen,
    },
    FixtureStatistics: {
      screen: FixtureStatisticsScreen,
    },
    CreateMatch: {
      screen: CreateMatchScreen,
      navigationOptions: {
        headerTitle: "יצירת משחק חדש"
      }
    },
    Matches: {
      screen: MatchesScreen,
      navigationOptions: {
        headerTitle: "משחקי המחזור"
      }
    },
    ManageFixture: {
      screen: ManageFixtureScreen,
      navigationOptions: {
        headerTitle: "ניהול מחזור"
      }
    },
    RequirePassword: {
      screen: RequirePasswordScreen,
      navigationOptions: {
        headerTitle: "משחקי המחזור"
      }
    },
    ViewFixture: {
      screen: ViewFixtureScreen,
    },
    AllPlayers: {
      screen: AllPlayersScreen,
    },
    AddPlayer: {
      screen: AddPlayerScreen,
      navigationOptions: {
        headerTitle: "הוספת שחקן"
      }
    },
    EditPlayer: {
      screen: EditPlayerScreen,
    },
    Player: {
      screen: PlayerScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontFamily: "assistant-semi-bold"
      },
      headerTitleAlign: 'center'
    }
  }
);

export default createAppContainer(MainNavigator);
