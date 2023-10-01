declare module 'node-media-server' {
export interface ModelArgs {
  ab: string
  vb: string
  vs: string
  vf: string
}

  export interface FFmpegArgs {
    rule?: string
    model?: ModelArgs[]
    app?: string
    vc?: string
    vcParam?: string[]
    ac?: string
    acParam?: string[]
    rtmp?: boolean
    rtmpApp?: string
    hls?: boolean
    hlsFlags?: string
    hlsKeep?: boolean
    dash?: boolean
    dashFlags?: string
    dashKeep?: boolean
    mp4?: boolean
    mp4Flags?: string
  }


  export interface Config {
    logType?: 0 | 1 | 2 | 3;
    rtmp: {
      port: number;
      chunk_size: number;
      gop_cache: boolean;
      ping: number;
      ping_timeout: number;
      ssl?: {
        port: number
        key: string
        cert: string
      }
    },
    http: {
      port?: number;
      allow_origin: string;
      mediaroot?: string;
    },
    https?: {
      port: number
      key: string
      cert: string
    },
    auth?: {
      play: boolean
      publish: boolean
      secret: string
    },
    trans?: {
      ffmpeg: string;
      tasks: FFmpegArgs[];
    }
    fission?: {
      ffmpeg: string;
      tasks: FFmpegArgs[];
    }
  }


  export default class NodeMediaServer {
  	constructor(config: Config) {
  		this.config = config;
  	}

  	run(): void;

  	on(eventName: string, listener: () => void): void;

  	stop(): void;

  	getSession(): any;
  }
}

