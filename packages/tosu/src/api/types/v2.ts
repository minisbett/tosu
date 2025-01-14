export enum BeatmapStatuses {
    Graveyard = '-2',
    Wip = '-1',
    Pending = 0,
    Ranked = 1,
    Approved = 2,
    Qualified = 3,
    Loved = 4
}

export enum Modes {
    Osu = 0,
    Taiko = 1,
    Fruits = 2,
    Mania = 3
}

export enum BanchoStatusEnum {
    Idle = 0,
    Afk = 1,
    Playing = 2
}

export enum UserLoginStatus {
    Reconnecting = 0,
    Guest = 256,
    Recieving_data = 257,
    Disconnected = 65537,
    Connected = 65793
}

export enum ReleaseStream {
    CuttingEdge,
    Stable,
    Beta,
    Fallback
}

export enum ScoreMeterType {
    None,
    Colour,
    Error
}

export enum LeaderboardType {
    Local,
    Global,
    Selectedmods,
    Friends,
    Country
}

export enum GroupType {
    None,
    Artist,
    BPM,
    Creator,
    Date,
    Difficulty,
    Length,
    Rank,
    MyMaps,
    Search = 12,
    Show_All = 12,
    Title,
    LastPlayed,
    OnlineFavourites,
    ManiaKeys,
    Mode,
    Collection,
    RankedStatus
}

export enum SortType {
    Artist,
    BPM,
    Creator,
    Date,
    Difficulty,
    Length,
    Rank,
    Title
}

export enum ChatStatus {
    Hidden,
    Visible,
    VisibleWithFriendsList
}

export interface ApiV2Answer {
    state: number;
    session: Session;
    settings: Settings;
    profile: Profile;
    beatmap: Beatmap;
    play: Play;
    leaderboard: Leaderboard[];
    performance: Performance;
    resultsScreen: ResultsScreen;
    folders: Folders;
    files: Files;
    directPath: DirectPath;
    tourney: Tourney | undefined;
}

export interface BeatmapTime {
    live: number;
    firstObject: number;
    lastObject: number;
    mp3Length: number;
}

export interface Session {
    playTime: number;
    playCount: number;
}

export interface Settings {
    interfaceVisible: boolean;
    replayUIVisible: boolean;
    chatVisibilityStatus: NumberName;
    leaderboard: SettingsLeaderboard;

    progressBarType: boolean;
    bassDensity: number;

    resolution: Resolution;
    client: Client;

    scoreMeter: ScoreMeter;
    cursor: Cursor;
    mouse: Mouse;
    mania: Mania;

    sort: NumberName;
    group: NumberName;

    skin: Skin;
    mode: NumberName;
    audio: Audio;
    background: Background;

    keybinds: Keybinds;
}

export interface Skin {
    useDefaultSkinInEditor: boolean;
    ignoreBeatmapSkins: boolean;
    tintSliderBall: boolean;
    useTaikoSkin: boolean;
    name: string;
}

export interface Cursor {
    useSkinCursor: boolean;
    autoSize: boolean;
    size: number;
}

export interface Mouse {
    rawInput: boolean;
    disableButtons: boolean;
    disableWheel: boolean;
    sensitivity: number;
}

export interface Mania {
    speedBPMScale: boolean;
    usePerBeatmapSpeedScale: boolean;
}

export interface SettingsLeaderboard {
    visible: boolean;
    type: NumberName;
}

export interface Resolution {
    fullscreen: boolean;
    width: number;
    height: number;
    widthFullscreen: number;
    heightFullscreen: number;
}

export interface Client {
    updateAvailable: boolean;
    branch: number;
    version: string;
}

export interface ScoreMeter {
    type: NumberName;
    size: number;
}

export interface Background {
    storyboard: boolean;
    video: boolean;
    dim: number;
}

export interface Audio {
    ignoreBeatmapSounds: boolean;
    useSkinSamples: boolean;
    volume: Volume;
    offset: Offset;
}

export interface Offset {
    universal: number;
}

export interface Volume {
    master: number;
    music: number;
    effect: number;
}

export interface Keybinds {
    osu: Osu;
    fruits: Fruits;
    taiko: Taiko;
    quickRetry: string;
}

export interface Osu {
    k1: string;
    k2: string;
    smokeKey: string;
}

export interface Fruits {
    k1: string;
    k2: string;
    Dash: string;
}

export interface Taiko {
    innerLeft: string;
    innerRight: string;
    outerLeft: string;
    outerRight: string;
}

export interface NumberName {
    number: number;
    name: string;
}

export interface Profile {
    userStatus: NumberName;
    banchoStatus: NumberName;
    id: number;
    name: string;
    mode: NumberName;
    rankedScore: number;
    level: number;
    accuracy: number;
    pp: number;
    playCount: number;
    globalRank: number;
    countryCode: NumberName;
    backgroundColour: string;
}

export interface Beatmap {
    time: BeatmapTime;
    status: NumberName;
    checksum: string;
    id: number;
    set: number;
    artist: string;
    artistUnicode: string;
    title: string;
    titleUnicode: string;
    mapper: string;
    version: string;
    stats: Stats;
}

export interface Stats {
    stars: Stars;
    ar: Ar;
    cs: Cs;
    od: Od;
    hp: Hp;
    bpm: Bpm;
    objects: Objects;
    maxCombo: number;
}

export interface Stars {
    live: number;
    aim: number | undefined;
    speed: number | undefined;
    flashlight: number | undefined;
    sliderFactor: number | undefined;
    stamina: number | undefined;
    rhythm: number | undefined;
    color: number | undefined;
    peak: number | undefined;
    hitWindow: number | undefined;
    total: number;
}

export interface Ar {
    original: number;
    converted: number;
}

export interface Cs {
    original: number;
    converted: number;
}

export interface Od {
    original: number;
    converted: number;
}

export interface Hp {
    original: number;
    converted: number;
}

export interface Bpm {
    common: number;
    min: number;
    max: number;
}

export interface Objects {
    circles: number;
    sliders: number;
    spinners: number;
    holds: number;
    total: number;
}

export interface Play {
    playerName: string;
    mode: NumberName;
    score: number;
    accuracy: number;
    healthBar: HealthBar;
    hits: Hits;
    hitErrorArray: any[];
    combo: Combo;
    mods: NumberName;
    rank: Rank;
    pp: Pp;
    unstableRate: number;
}

export interface HealthBar {
    normal: number;
    smooth: number;
}

export interface Hits {
    '0': number;
    '50': number;
    '100': number;
    '300': number;
    geki: number;
    katu: number;
    sliderBreaks: number;
}

export interface Combo {
    current: number;
    max: number;
}

export interface Rank {
    current: string;
    maxThisPlay: string;
}

export interface Pp {
    current: number;
    fc: number;
    maxAchievedThisPlay: number;
}

export interface Leaderboard {
    isFailed: boolean;
    position: number;
    team: number;
    name: string;
    score: number;
    accuracy: number;
    hits: Hits2;
    combo: Combo2;
    mods: NumberName;
    rank: string;
}

export interface Hits2 {
    '0': number;
    '50': number;
    '100': number;
    '300': number;
    geki: number;
    katu: number;
}

export interface Combo2 {
    current: number;
    max: number;
}

export interface ApiKeysAnswer {
    k1: K1;
    k2: K2;
    m1: M1;
    m2: M2;
}

export interface K1 {
    isPressed: boolean;
    count: number;
}

export interface K2 {
    isPressed: boolean;
    count: number;
}

export interface M1 {
    isPressed: boolean;
    count: number;
}

export interface M2 {
    isPressed: boolean;
    count: number;
}

export interface Performance {
    accuracy: Accuracy;
    graph: Graph;
}

export interface Accuracy {
    '95': number;
    '96': number;
    '97': number;
    '98': number;
    '99': number;
    '100': number;
}

export interface Graph {
    series: Series[];
    xaxis: number[];
}

export interface Series {
    name: string;
    data: number[];
}

export interface ResultsScreen {
    mode: NumberName;
    score: number;
    name: string;
    hits: Hits3;
    mods: NumberName;
    maxCombo: number;
    rank: string;
    createdAt: string;
}

export interface Hits3 {
    '0': number;
    '50': number;
    '100': number;
    '300': number;
    geki: number;
    katu: number;
}

export interface Folders {
    game: string;
    skin: string;
    songs: string;
    beatmap: string;
}

export interface Files {
    beatmap: string;
    background: string;
    audio: string;
}

export interface DirectPath {
    beatmapFile: string;
    beatmapBackground: string;
    beatmapAudio: string;
    beatmapFolder: string;
    skinFolder: string;
    collections: string;
    osudb: string;
    scoresdb: string;
}

export interface Tourney {
    scoreVisible: boolean;
    starsVisible: boolean;

    ipcState: number;
    bestOF: number;

    team: {
        left: string;
        right: string;
    };
    points: {
        left: number;
        right: number;
    };
    totalScore: {
        left: number;
        right: number;
    };

    chat: TourneyChatMessages[];
    clients: TourneyClients[];
}

export interface TourneyChatMessages {
    team: string;
    name: string;
    message: string;
    timestamp: string;
}

export interface TourneyClients {
    team: 'left' | 'right';
    user: {
        id: number;
        name: string;
        country: string;
        accuracy: number;
        rankedScore: number;
        playCount: number;
        globalRank: number;
        totalPP: number;
    };
    play: Play;
}
