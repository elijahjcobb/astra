# pstdl-ui
A set of React components written in TypeScript with the purpose of creating robotic control software.
# Components
Below are all the components available.
## Mutable
The following components are component that are intractable to change the state.
### PUIMutableBinaryStatus
### PUIMutableNumerics Status
### PUIPicker
### PUISegmentedPicker
### PUISlider

## Immutable
The following components are for displaying data.
### PUICard
### PUIGage
### PUIImmutableBinaryStatus
### PUIImmutableNumericStatus
### PUIToast
### PUIGamepad
### PUILog
### PUIModal


# Helpers
The following are non-visual aspects of pstdl-ui.
## Hooks
### usePUIState
### usePUIGetState
### usePUISetState
### usePUIToast
### usePUIClearToast
### usePUILog
### usePUIClearLog
## Classes
The following are helpful classes used throughout pstdl-ui.
### PUIColor
### PUIApp
### PUIContext

## Controllers
The following interact with a keyboard or gamepad to trigger events in a global event queue.
### PUIKeyboardController
### PUIGamepadController
