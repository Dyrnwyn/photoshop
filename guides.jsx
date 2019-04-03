
UnitValue.baseUnit = UnitValue (1/300, "in")
v = new UnitValue(14.9, "cm")
alert ( v.as("px"))
v = new UnitValue(20, "cm")
alert ( v.as ("px"))

s = (2700 - v.as ("px"))/2;
alert (s)
UnitValue.base = null;
app.activeDocument.guides.add (Direction.VERTICAL, UnitValue(s,"px"))
app.activeDocument.guides.add (Direction.VERTICAL, UnitValue(2700-s,"px"))