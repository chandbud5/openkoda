// Generated from ./src/grammar/Flow.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class FlowLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly MGET = 10;
	public static readonly SERVICES = 11;
	public static readonly RESULT = 12;
	public static readonly THEN = 13;
	public static readonly THENSET = 14;
	public static readonly FLOW = 15;
	public static readonly NAME = 16;
	public static readonly KEY = 17;
	public static readonly STRING = 18;
	public static readonly SP = 19;
	public static readonly WS = 20;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"MGET", "SERVICES", "RESULT", "THEN", "THENSET", "FLOW", "NAME", "KEY", 
		"STRING", "SP", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'('", "')'", "','", "'=>'", "'{'", "'}'", "'\"'", "'='", 
		"'model.get'", "'services'", "'result'", "'then'", "'thenSet'", "'flow'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "MGET", "SERVICES", "RESULT", "THEN", 
		"THENSET", "FLOW", "NAME", "KEY", "STRING", "SP", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FlowLexer._LITERAL_NAMES, FlowLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FlowLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(FlowLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Flow.g4"; }

	// @Override
	public get ruleNames(): string[] { return FlowLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return FlowLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return FlowLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return FlowLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x16\x89\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x06\x11" +
		"l\n\x11\r\x11\x0E\x11m\x03\x12\x03\x12\x06\x12r\n\x12\r\x12\x0E\x12s\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x07\x13z\n\x13\f\x13\x0E\x13}\v\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x15\x06\x15\x84\n\x15\r\x15\x0E\x15\x85\x03" +
		"\x15\x03\x15\x02\x02\x02\x16\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
		"\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%" +
		"\x02\x14\'\x02\x15)\x02\x16\x03\x02\x06\x05\x022;C\\c|\x03\x02$$\v\x02" +
		"##%),-//11<>@B]a~~\x05\x02\v\f\x0F\x0F\"\"\x02\x8C\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
		"\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
		"\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02" +
		"\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)" +
		"\x03\x02\x02\x02\x03+\x03\x02\x02\x02\x05-\x03\x02\x02\x02\x07/\x03\x02" +
		"\x02\x02\t1\x03\x02\x02\x02\v3\x03\x02\x02\x02\r6\x03\x02\x02\x02\x0F" +
		"8\x03\x02\x02\x02\x11:\x03\x02\x02\x02\x13<\x03\x02\x02\x02\x15>\x03\x02" +
		"\x02\x02\x17H\x03\x02\x02\x02\x19Q\x03\x02\x02\x02\x1BX\x03\x02\x02\x02" +
		"\x1D]\x03\x02\x02\x02\x1Fe\x03\x02\x02\x02!k\x03\x02\x02\x02#o\x03\x02" +
		"\x02\x02%w\x03\x02\x02\x02\'\x80\x03\x02\x02\x02)\x83\x03\x02\x02\x02" +
		"+,\x070\x02\x02,\x04\x03\x02\x02\x02-.\x07*\x02\x02.\x06\x03\x02\x02\x02" +
		"/0\x07+\x02\x020\b\x03\x02\x02\x0212\x07.\x02\x022\n\x03\x02\x02\x023" +
		"4\x07?\x02\x0245\x07@\x02\x025\f\x03\x02\x02\x0267\x07}\x02\x027\x0E\x03" +
		"\x02\x02\x0289\x07\x7F\x02\x029\x10\x03\x02\x02\x02:;\x07$\x02\x02;\x12" +
		"\x03\x02\x02\x02<=\x07?\x02\x02=\x14\x03\x02\x02\x02>?\x07o\x02\x02?@" +
		"\x07q\x02\x02@A\x07f\x02\x02AB\x07g\x02\x02BC\x07n\x02\x02CD\x070\x02" +
		"\x02DE\x07i\x02\x02EF\x07g\x02\x02FG\x07v\x02\x02G\x16\x03\x02\x02\x02" +
		"HI\x07u\x02\x02IJ\x07g\x02\x02JK\x07t\x02\x02KL\x07x\x02\x02LM\x07k\x02" +
		"\x02MN\x07e\x02\x02NO\x07g\x02\x02OP\x07u\x02\x02P\x18\x03\x02\x02\x02" +
		"QR\x07t\x02\x02RS\x07g\x02\x02ST\x07u\x02\x02TU\x07w\x02\x02UV\x07n\x02" +
		"\x02VW\x07v\x02\x02W\x1A\x03\x02\x02\x02XY\x07v\x02\x02YZ\x07j\x02\x02" +
		"Z[\x07g\x02\x02[\\\x07p\x02\x02\\\x1C\x03\x02\x02\x02]^\x07v\x02\x02^" +
		"_\x07j\x02\x02_`\x07g\x02\x02`a\x07p\x02\x02ab\x07U\x02\x02bc\x07g\x02" +
		"\x02cd\x07v\x02\x02d\x1E\x03\x02\x02\x02ef\x07h\x02\x02fg\x07n\x02\x02" +
		"gh\x07q\x02\x02hi\x07y\x02\x02i \x03\x02\x02\x02jl\t\x02\x02\x02kj\x03" +
		"\x02\x02\x02lm\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02n\"" +
		"\x03\x02\x02\x02oq\x07$\x02\x02pr\t\x02\x02\x02qp\x03\x02\x02\x02rs\x03" +
		"\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x07" +
		"$\x02\x02v$\x03\x02\x02\x02w{\x07$\x02\x02xz\n\x03\x02\x02yx\x03\x02\x02" +
		"\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|~\x03\x02\x02" +
		"\x02}{\x03\x02\x02\x02~\x7F\x07$\x02\x02\x7F&\x03\x02\x02\x02\x80\x81" +
		"\t\x04\x02\x02\x81(\x03\x02\x02\x02\x82\x84\t\x05\x02\x02\x83\x82\x03" +
		"\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03" +
		"\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\b\x15\x02\x02\x88*\x03\x02" +
		"\x02\x02\x07\x02ms{\x85\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FlowLexer.__ATN) {
			FlowLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FlowLexer._serializedATN));
		}

		return FlowLexer.__ATN;
	}

}
