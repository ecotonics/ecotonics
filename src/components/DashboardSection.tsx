import { useState } from 'react';
import { 
  Lightbulb, 
  Thermometer, 
  Sun,
  Moon,
  Tv,
  Wind,
  Shield
} from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

interface RoomData {
  name: string;
  temperature: number;
  humidity: number;
  lights: boolean;
  lightLevel: number;
}

export const DashboardSection = () => {
  const [selectedRoom, setSelectedRoom] = useState('Living Room');
  const [rooms, setRooms] = useState<Record<string, RoomData>>({
    'Living Room': { name: 'Living Room', temperature: 72, humidity: 45, lights: true, lightLevel: 80 },
    'Bedroom': { name: 'Bedroom', temperature: 68, humidity: 50, lights: false, lightLevel: 30 },
    'Kitchen': { name: 'Kitchen', temperature: 70, humidity: 40, lights: true, lightLevel: 100 },
    'Office': { name: 'Office', temperature: 71, humidity: 42, lights: true, lightLevel: 90 },
  });

  const [devices, setDevices] = useState({
    security: true,
    climate: true,
    entertainment: false,
    blinds: true,
  });

  const [activeScene, setActiveScene] = useState<string | null>(null);
  const [colorMode, setColorMode] = useState<'warm' | 'cool'>('warm');

  const currentRoom = rooms[selectedRoom];

  const toggleLights = () => {
    setRooms(prev => ({
      ...prev,
      [selectedRoom]: {
        ...prev[selectedRoom],
        lights: !prev[selectedRoom].lights,
      }
    }));
  };

  const updateLightLevel = (value: number[]) => {
    setRooms(prev => ({
      ...prev,
      [selectedRoom]: {
        ...prev[selectedRoom],
        lightLevel: value[0],
        lights: value[0] > 0,
      }
    }));
  };

  const handleSceneChange = (scene: string) => {
    setActiveScene(scene);
    const sceneSettings: Record<string, { lights: boolean; lightLevel: number; color: 'warm' | 'cool' }> = {
      'Morning': { lights: true, lightLevel: 100, color: 'warm' },
      'Away': { lights: false, lightLevel: 0, color: 'warm' },
      'Movie': { lights: true, lightLevel: 20, color: 'cool' },
      'Night': { lights: true, lightLevel: 10, color: 'warm' },
    };
    
    if (sceneSettings[scene]) {
      setColorMode(sceneSettings[scene].color);
      setRooms(prev => ({
        ...prev,
        [selectedRoom]: {
          ...prev[selectedRoom],
          lights: sceneSettings[scene].lights,
          lightLevel: sceneSettings[scene].lightLevel,
        }
      }));
    }
  };

  const glowIntensity = currentRoom.lights ? currentRoom.lightLevel / 100 : 0;
  
  // Warm white: rgb(255, 244, 229) - Blue: rgb(59, 130, 246)
  const warmColor = `rgba(255, 244, 229, ${glowIntensity * 0.6})`;
  const coolColor = `rgba(59, 130, 246, ${glowIntensity * 0.4})`;
  const activeColor = colorMode === 'warm' ? warmColor : coolColor;
  const glowColor = colorMode === 'warm' ? 'rgba(255, 200, 150,' : 'rgba(100, 150, 255,';

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Dynamic ambient lighting - full section background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out pointer-events-none"
        style={{
          background: currentRoom.lights 
            ? `radial-gradient(ellipse 80% 60% at 50% 40%, ${activeColor} 0%, transparent 70%)`
            : 'transparent',
        }}
      />
      
      {/* Secondary glow layer for depth */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out pointer-events-none"
        style={{
          background: currentRoom.lights 
            ? `radial-gradient(circle at 50% 50%, ${glowColor}${glowIntensity * 0.15}) 0%, transparent 50%)`
            : 'transparent',
        }}
      />

      {/* Subtle animated particles effect when lights are on */}
      {currentRoom.lights && glowIntensity > 0.3 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse-slow"
            style={{ background: colorMode === 'warm' ? 'rgba(255, 220, 180, 0.4)' : 'rgba(150, 180, 255, 0.4)' }}
          />
          <div 
            className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full animate-float"
            style={{ background: colorMode === 'warm' ? 'rgba(255, 220, 180, 0.3)' : 'rgba(150, 180, 255, 0.3)' }}
          />
          <div 
            className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full animate-pulse-slow"
            style={{ background: colorMode === 'warm' ? 'rgba(255, 220, 180, 0.5)' : 'rgba(150, 180, 255, 0.5)', animationDelay: '1s' }}
          />
        </div>
      )}
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Control at Your
            <span className="text-gradient"> Fingertips</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience our intuitive control interface. <span className="text-primary font-medium">Try the controls below!</span>
          </p>
        </div>

        {/* Dashboard */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-700"
            style={{
              boxShadow: currentRoom.lights 
                ? colorMode === 'warm'
                  ? `0 0 ${60 * glowIntensity}px rgba(255, 200, 150, ${glowIntensity * 0.3}), 0 0 ${120 * glowIntensity}px rgba(255, 220, 180, ${glowIntensity * 0.15})`
                  : `0 0 ${60 * glowIntensity}px rgba(59, 130, 246, ${glowIntensity * 0.25}), 0 0 ${120 * glowIntensity}px rgba(100, 150, 255, ${glowIntensity * 0.1})`
                : '0 4px 20px rgba(0, 0, 0, 0.05)',
            }}
          >
            {/* Inner glow effect */}
            {currentRoom.lights && (
              <div 
                className="absolute inset-0 rounded-2xl transition-opacity duration-700 pointer-events-none"
                style={{
                  background: colorMode === 'warm'
                    ? `radial-gradient(ellipse at top, rgba(255, 244, 229, ${glowIntensity * 0.2}) 0%, transparent 60%)`
                    : `radial-gradient(ellipse at top, rgba(59, 130, 246, ${glowIntensity * 0.15}) 0%, transparent 60%)`,
                }}
              />
            )}

            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Smart Home Dashboard
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  All systems operational
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-600 font-medium">Online</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      colorMode === 'warm' && currentRoom.lights
                        ? 'bg-amber-100 text-amber-600 shadow-lg shadow-amber-200/50' 
                        : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                    }`}
                    onClick={() => { setColorMode('warm'); updateLightLevel([100]); }}
                  >
                    <Sun size={18} />
                  </button>
                  <button 
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      colorMode === 'cool' && currentRoom.lights
                        ? 'bg-blue-100 text-blue-600 shadow-lg shadow-blue-200/50' 
                        : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                    }`}
                    onClick={() => { setColorMode('cool'); updateLightLevel([80]); }}
                  >
                    <Moon size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 relative z-10">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Room Selector */}
                <div className="bg-background rounded-xl p-5 border border-border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Select Room</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.keys(rooms).map((room) => (
                      <button
                        key={room}
                        onClick={() => setSelectedRoom(room)}
                        className={`p-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                          selectedRoom === room
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {rooms[room].lights && (
                          <span 
                            className="absolute top-1 right-1 w-2 h-2 rounded-full transition-all duration-300"
                            style={{ 
                              background: colorMode === 'warm' ? 'rgb(251, 191, 36)' : 'rgb(59, 130, 246)',
                              opacity: rooms[room].lightLevel / 100,
                              boxShadow: colorMode === 'warm' 
                                ? `0 0 6px rgba(251, 191, 36, ${rooms[room].lightLevel / 100})`
                                : `0 0 6px rgba(59, 130, 246, ${rooms[room].lightLevel / 100})`
                            }}
                          />
                        )}
                        {room}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Climate Control */}
                <div className="bg-background rounded-xl p-5 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-muted-foreground">Climate</h4>
                    <Thermometer className="text-primary" size={18} />
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-5xl font-bold text-foreground font-display">
                      {currentRoom.temperature}°
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Humidity: {currentRoom.humidity}%
                    </div>
                  </div>
                  <Slider
                    defaultValue={[currentRoom.temperature]}
                    min={60}
                    max={80}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Center Column - Lighting */}
              <div className="space-y-4">
                <div 
                  className="bg-background rounded-xl p-5 border border-border transition-all duration-700 relative overflow-hidden"
                  style={{
                    boxShadow: currentRoom.lights 
                      ? colorMode === 'warm'
                        ? `inset 0 0 ${40 * glowIntensity}px rgba(255, 220, 180, ${glowIntensity * 0.15})`
                        : `inset 0 0 ${40 * glowIntensity}px rgba(100, 150, 255, ${glowIntensity * 0.12})`
                      : 'none',
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-muted-foreground">Lighting</h4>
                    <button 
                      onClick={toggleLights}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        currentRoom.lights 
                          ? colorMode === 'warm'
                            ? 'bg-amber-100 text-amber-600 shadow-lg shadow-amber-200/50' 
                            : 'bg-blue-100 text-blue-600 shadow-lg shadow-blue-200/50'
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      <Lightbulb size={18} />
                    </button>
                  </div>
                  
                  {/* Light visualization */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    {/* Outer glow rings */}
                    <div 
                      className="absolute inset-0 rounded-full transition-all duration-700"
                      style={{
                        background: currentRoom.lights 
                          ? colorMode === 'warm'
                            ? `radial-gradient(circle, rgba(255, 220, 180, ${glowIntensity * 0.5}) 0%, transparent 70%)`
                            : `radial-gradient(circle, rgba(100, 150, 255, ${glowIntensity * 0.4}) 0%, transparent 70%)`
                          : 'transparent',
                        transform: `scale(${1 + glowIntensity * 0.2})`,
                      }}
                    />
                    
                    {/* Main bulb circle */}
                    <div 
                      className="relative w-full h-full rounded-full border-2 flex items-center justify-center transition-all duration-500"
                      style={{
                        borderColor: currentRoom.lights 
                          ? colorMode === 'warm'
                            ? `rgba(251, 191, 36, ${0.3 + glowIntensity * 0.5})`
                            : `rgba(59, 130, 246, ${0.3 + glowIntensity * 0.5})`
                          : 'hsl(var(--border))',
                        background: currentRoom.lights 
                          ? colorMode === 'warm'
                            ? `radial-gradient(circle, rgba(255, 244, 229, ${glowIntensity * 0.3}) 0%, transparent 70%)`
                            : `radial-gradient(circle, rgba(200, 220, 255, ${glowIntensity * 0.25}) 0%, transparent 70%)`
                          : 'transparent',
                        boxShadow: currentRoom.lights 
                          ? colorMode === 'warm'
                            ? `0 0 ${25 * glowIntensity}px rgba(255, 200, 150, ${glowIntensity * 0.5})`
                            : `0 0 ${25 * glowIntensity}px rgba(100, 150, 255, ${glowIntensity * 0.4})`
                          : 'none',
                      }}
                    >
                      <div className="text-center">
                        <div 
                          className="text-2xl font-bold font-display transition-all duration-300"
                          style={{
                            color: currentRoom.lights 
                              ? colorMode === 'warm' ? 'rgb(217, 119, 6)' : 'rgb(37, 99, 235)'
                              : 'hsl(var(--foreground))',
                            textShadow: currentRoom.lights 
                              ? colorMode === 'warm'
                                ? `0 0 ${8 * glowIntensity}px rgba(251, 191, 36, 0.6)` 
                                : `0 0 ${8 * glowIntensity}px rgba(59, 130, 246, 0.5)`
                              : 'none',
                          }}
                        >
                          {currentRoom.lightLevel}%
                        </div>
                        <div className="text-xs text-muted-foreground">Brightness</div>
                      </div>
                    </div>
                  </div>

                  <Slider
                    value={[currentRoom.lightLevel]}
                    onValueChange={updateLightLevel}
                    min={0}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  
                  <div className="flex justify-center gap-1.5 mt-3">
                    {[0, 25, 50, 75, 100].map((level) => (
                      <button
                        key={level}
                        onClick={() => updateLightLevel([level])}
                        className={`px-2.5 py-1 rounded text-xs font-medium transition-all duration-300 ${
                          currentRoom.lightLevel === level
                            ? colorMode === 'warm'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-blue-100 text-blue-700'
                            : 'bg-secondary text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {level}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Scenes */}
                <div className="bg-background rounded-xl p-5 border border-border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Quick Scenes</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: 'Morning', icon: '☀️' },
                      { name: 'Away', icon: '🚪' },
                      { name: 'Movie', icon: '🎬' },
                      { name: 'Night', icon: '🌙' },
                    ].map((scene) => (
                      <button
                        key={scene.name}
                        onClick={() => handleSceneChange(scene.name)}
                        className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 flex flex-col items-center gap-1.5 ${
                          activeScene === scene.name
                            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                            : 'bg-secondary text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <span>{scene.icon}</span>
                        <span>{scene.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Devices */}
              <div className="bg-background rounded-xl p-5 border border-border">
                <h4 className="text-sm font-medium text-muted-foreground mb-4">Smart Devices</h4>
                <div className="space-y-3">
                  {[
                    { key: 'security', name: 'Security System', icon: Shield, activeClass: 'bg-emerald-100 text-emerald-600' },
                    { key: 'climate', name: 'Climate Control', icon: Wind, activeClass: 'bg-sky-100 text-sky-600' },
                    { key: 'entertainment', name: 'Entertainment', icon: Tv, activeClass: 'bg-violet-100 text-violet-600' },
                    { key: 'blinds', name: 'Smart Blinds', icon: Sun, activeClass: 'bg-amber-100 text-amber-600' },
                  ].map((device) => (
                    <div
                      key={device.key}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          devices[device.key as keyof typeof devices] 
                            ? device.activeClass
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <device.icon size={18} />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-foreground">{device.name}</span>
                          <p className="text-xs text-muted-foreground">
                            {devices[device.key as keyof typeof devices] ? 'Active' : 'Inactive'}
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={devices[device.key as keyof typeof devices]}
                        onCheckedChange={(checked) =>
                          setDevices(prev => ({ ...prev, [device.key]: checked }))
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
