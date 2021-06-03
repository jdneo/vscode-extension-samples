import { CancellationToken, Hover, HoverProvider, MarkdownString, Position, ProviderResult, TextDocument } from "vscode";

export class FakedHoverProvider implements HoverProvider {
    provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {
        const markdownString = new MarkdownString();
        markdownString.appendCodeblock("void org.springframework.samples.petclinic.model.ValidatorTest.shouldNotValidateWhenFirstNameEmpty()", "java");
        return new Hover(markdownString);
    }
}