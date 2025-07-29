import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button Component", () => {
  it("renders a default button", () => {
    render(<Button>Click here</Button>);
    expect(screen.getByText("Click here")).toBeInTheDocument();
  });

  it("applies variant class", () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");
  });

  it("applies size classes", () => {
    const { rerender } = render(<Button size="large">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-lg");

    rerender(<Button size="small">Small</Button>);
    expect(screen.getByText("Small")).toHaveClass("btn-sm");

    rerender(<Button size="tiny">Tiny</Button>);
    expect(screen.getByText("Tiny")).toHaveClass("btn-xs");
  });

  it("shows loading spinner and text when isLoading is true", () => {
    render(
      <Button isLoading loadingText="Loading...">
        Submit
      </Button>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("pointer-events-none");
  });

  it("applies outline and link classes", () => {
    const { rerender } = render(<Button isOutline>Outline</Button>);
    expect(screen.getByText("Outline")).toHaveClass("btn-outline");

    rerender(<Button isLink>Link</Button>);
    expect(screen.getByText("Link")).toHaveClass("btn-link");
  });

  it("applies shape classes", () => {
    const { rerender } = render(<Button shape="full">Full</Button>);
    expect(screen.getByText("Full")).toHaveClass("btn-block");

    rerender(<Button shape="wide">Wide</Button>);
    expect(screen.getByText("Wide")).toHaveClass("btn-full");

    rerender(<Button shape="square">Square</Button>);
    expect(screen.getByText("Square")).toHaveClass("btn-square");
  });

  it("is disabled when isDisabled is true", () => {
    render(<Button isDisabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(
      <Button isDisabled onClick={handleClick}>
        No click
      </Button>
    );
    await user.click(screen.getByText("No click"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders children when not loading", () => {
    render(<Button>Child Text</Button>);
    expect(screen.getByText("Child Text")).toBeInTheDocument();
  });

  it("renders animated icon class when animatedIcon is true", () => {
    render(<Button animatedIcon>Animated</Button>);
    expect(screen.getByText("Animated")).toHaveClass("animated-icon");
  });
});
