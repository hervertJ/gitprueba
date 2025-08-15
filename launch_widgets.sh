WINDOW_NAME="custom-calendar music-window device-control specs"

all_open=true
for name in $WINDOW_NAME; do
  if ! eww active-windows | grep -qw "$name"; then
    all_open=false
    break
  fi
done

if $all_open; then
  eww close $WINDOW_NAME
else
  eww open-many $WINDOW_NAME
fi
